import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button, View } from 'react-native';

const Date = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View>
      <Button onPress={() => setShow(true)} title="Show date picker!" />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default Date;



// import DatePicker from 'react-native-date-picker';

// const MyComponent = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <View>
//       <DatePicker date={date} onDateChange={setDate} />
//     </View>
//   );
// };
