import React from "react";
import { Button } from 'react-native';
import { useNotifications } from 'expo-notifications';

export default function Alarm() {

  const { scheduleNotificationAsync } = useNotifications();

  useEffect(() => {
    // Expo 알림 사용 권한 요청
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== 'granted') {
        console.log('알림 권한이 거부되었습니다.');
      }
    })();
  }, []);

  // 알림 보내기 함수
  const sendNotification = async () => {
    await scheduleNotificationAsync({
      content: {
        title: '알림 제목',
        body: '알림 내용',
      },
      trigger: null,
    });
  };

  return (
    // 알림 보내기 버튼
    <Button title="알림 보내기" onPress={sendNotification} />
  );
}
