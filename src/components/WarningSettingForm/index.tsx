import UserImage from "../../assets/images/img_user.jpg";
import MecoOffice from "../../assets/images/meco_office 1.png";
import { Card, Input, Typography, Image, Button, Space, DatePicker } from "antd";
const { Text } = Typography;
const { RangePicker } = DatePicker;

const WarningSettingForm = () => {
  return (
    <div className="warning-setting-form">
      <div className="warning-setting-form__warning-name-setting">
        <Text className="warning-setting-form__warning-name-label">
          Tên cảnh báo
        </Text>
        <Input
          placeholder="tên cảnh báo"
          className="warning-setting-form__warning-name-input"
        />
      </div>
      <Card
        title="Cảnh báo theo thời gian"
        headStyle={{ backgroundColor: "#EBEBEB" }}
        className="warning-setting-form__warning-time-block"
      >
        <Text className="warning-setting-form__warning-time-zone">
          Khung thời gian cảnh báo:
        </Text>
        <Space direction="vertical" size={12}>
          <RangePicker showTime />
        </Space>
      </Card>
      <Card
        title="Cảnh báo theo khuôn mặt"
        headStyle={{ backgroundColor: "#EBEBEB" }}
        className="warning-setting-form__warning-face-block"
      >
        <Text className="warning-setting-form__warning-face-label">
          Chọn khuôn mặt được dùng để cảnh báo:{" "}
        </Text>
        <Image width={200} src={UserImage} />
      </Card>
      <Card
        title="Cảnh báo theo khu vực"
        headStyle={{ backgroundColor: "#EBEBEB" }}
        className="warning-setting-form__warning-region-block"
      >
        <Text className="warning-setting-form__warning-region-label">
          Chọn khu vực để cảnh báo:{" "}
        </Text>
        <Image width={200} src={MecoOffice} />
      </Card>
      <div>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default WarningSettingForm;
