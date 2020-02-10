import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Picker,
  Dimensions,
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Container, Header, Content, Form, Title, Left, Body, Right } from "native-base";
import { CheckBox, Icon, Card } from 'react-native-elements'

const { width, height } = Dimensions.get('window')
const list = [
  { id: 1, SelectName: "1", name: 'Slot 1', IsChecked: false, Available: false },
  { id: 2, SelectName: "2", name: 'Slot 2', IsChecked: false, Available: true },
  { id: 3, SelectName: "3", name: 'Slot 3', IsChecked: false, Available: true },
  { id: 4, SelectName: "4", name: 'Slot 4', IsChecked: false, Available: false },
  { id: 5, SelectName: "5", name: 'Slot 5', IsChecked: false, Available: true },
  { id: 6, SelectName: "6", name: 'Slot 6', IsChecked: false, Available: false },
  { id: 7, SelectName: "7", name: 'Slot 7', IsChecked: false, Available: true },
  { id: 8, SelectName: "8", name: 'Slot 8', IsChecked: false, Available: false },
  { id: 9, SelectName: "9", name: 'Slot 9', IsChecked: false, Available: true },
  { id: 10, SelectName: "10", name: 'Slot 10', IsChecked: false, Available: false },
  { id: 11, SelectName: "11", name: 'Slot 11', IsChecked: false, Available: true },
  { id: 12, SelectName: "12", name: 'Slot 12', IsChecked: false, Available: false },
  { id: 13, SelectName: "13", name: 'Slot 13', IsChecked: false, Available: true },
  { id: 14, SelectName: "14", name: 'Slot 14', IsChecked: false, Available: false },
  { id: 15, SelectName: "15", name: 'Slot 15', IsChecked: false, Available: true },
  { id: 16, SelectName: "16", name: 'Slot 16', IsChecked: false, Available: false },
  { id: 17, SelectName: "17", name: 'Slot 17', IsChecked: false, Available: false },
  { id: 18, SelectName: "18", name: 'Slot 18', IsChecked: false, Available: false },
  { id: 19, SelectName: "19", name: 'Slot 19', IsChecked: false, Available: true },
  { id: 20, SelectName: "20", name: 'Slot 20', IsChecked: false, Available: false },
  { id: 21, SelectName: "21", name: 'Slot 21', IsChecked: false, Available: true },
  { id: 22, SelectName: "22", name: 'Slot 22', IsChecked: false, Available: false },
  { id: 23, SelectName: "23", name: 'Slot 23', IsChecked: false, Available: true },
  { id: 24, SelectName: "24", name: 'Slot 24', IsChecked: false, Available: false },
  { id: 25, SelectName: "25", name: 'Slot 25', IsChecked: false, Available: true },
  { id: 26, SelectName: "26", name: 'Slot 26', IsChecked: false, Available: true },
  { id: 27, SelectName: "27", name: 'Slot 27', IsChecked: false, Available: false },
  { id: 28, SelectName: "28", name: 'Slot 28', IsChecked: false, Available: true },
  { id: 29, SelectName: "29", name: 'Slot 29', IsChecked: false, Available: false },
  { id: 30, SelectName: "30", name: 'Slot 30', IsChecked: false, Available: true },
  { id: 31, SelectName: "31", name: 'Slot 31', IsChecked: false, Available: false },
  { id: 32, SelectName: "32", name: 'Slot 32', IsChecked: false, Available: true },
  { id: 33, SelectName: "33", name: 'Slot 33', IsChecked: false, Available: true },
  { id: 34, SelectName: "34", name: 'Slot 34', IsChecked: false, Available: false },
  { id: 35, SelectName: "35", name: 'Slot 35', IsChecked: false, Available: true },
  { id: 36, SelectName: "36", name: 'Slot 36', IsChecked: false, Available: false },
  { id: 37, SelectName: "37", name: 'Slot 37', IsChecked: false, Available: false },
  { id: 38, SelectName: "38", name: 'Slot 38', IsChecked: false, Available: true },
  { id: 39, SelectName: "39", name: 'Slot 39', IsChecked: false, Available: false },
  { id: 40, SelectName: "40", name: 'Slot 40', IsChecked: false, Available: false },
  { id: 41, SelectName: "41", name: 'Slot 41', IsChecked: false, Available: true },
  { id: 42, SelectName: "42", name: 'Slot 42', IsChecked: false, Available: true },
  { id: 43, SelectName: "43", name: 'Slot 43', IsChecked: false, Available: false },
  { id: 44, SelectName: "44", name: 'Slot 44', IsChecked: false, Available: true },
  { id: 45, SelectName: "45", name: 'Slot 45', IsChecked: false, Available: true },
  { id: 46, SelectName: "46", name: 'Slot 46', IsChecked: false, Available: true },
  { id: 47, SelectName: "47", name: 'Slot 47', IsChecked: false, Available: true },
  { id: 48, SelectName: "48", name: 'Slot 48', IsChecked: false, Available: true },
  { id: 49, SelectName: "49", name: 'Slot 49', IsChecked: false, Available: false },
  { id: 50, SelectName: "50", name: 'Slot 50', IsChecked: false, Available: true },
  { id: 51, SelectName: "51", name: 'Slot 51', IsChecked: false, Available: false },
  { id: 52, SelectName: "52", name: 'Slot 52', IsChecked: false, Available: false },
  { id: 53, SelectName: "53", name: 'Slot 53', IsChecked: false, Available: true },
  { id: 54, SelectName: "54", name: 'Slot 54', IsChecked: false, Available: false },
  { id: 55, SelectName: "55", name: 'Slot 55', IsChecked: false, Available: true },
  { id: 56, SelectName: "56", name: 'Slot 56', IsChecked: false, Available: false },
  { id: 57, SelectName: "57", name: 'Slot 57', IsChecked: false, Available: false },
  { id: 58, SelectName: "58", name: 'Slot 58', IsChecked: false, Available: true },
  { id: 59, SelectName: "59", name: 'Slot 59', IsChecked: false, Available: false },
  { id: 60, SelectName: "60", name: 'Slot 60', IsChecked: false, Available: false },
  { id: 61, SelectName: "61", name: 'Slot 61', IsChecked: false, Available: false },
  { id: 62, SelectName: "62", name: 'Slot 62', IsChecked: false, Available: true },
  { id: 66, SelectName: "66", name: 'Slot 66', IsChecked: false, Available: true },
  { id: 64, SelectName: "64", name: 'Slot 64', IsChecked: false, Available: false },
  { id: 65, SelectName: "65", name: 'Slot 65', IsChecked: false, Available: true },
  { id: 66, SelectName: "66", name: 'Slot 66', IsChecked: false, Available: false },
  { id: 67, SelectName: "67", name: 'Slot 67', IsChecked: false, Available: false },
  { id: 68, SelectName: "68", name: 'Slot 68', IsChecked: false, Available: true },
  { id: 69, SelectName: "69", name: 'Slot 69', IsChecked: false, Available: false },
  { id: 70, SelectName: "70", name: 'Slot 70', IsChecked: false, Available: false },
  { id: 71, SelectName: "71", name: 'Slot 71', IsChecked: false, Available: true },
  { id: 72, SelectName: "72", name: 'Slot 72', IsChecked: false, Available: true },
  { id: 73, SelectName: "73", name: 'Slot 73', IsChecked: false, Available: false },
  { id: 77, SelectName: "77", name: 'Slot 77', IsChecked: false, Available: true },
  { id: 75, SelectName: "75", name: 'Slot 75', IsChecked: false, Available: true },
  { id: 76, SelectName: "76", name: 'Slot 76', IsChecked: false, Available: true },
  { id: 77, SelectName: "77", name: 'Slot 77', IsChecked: false, Available: true },
  { id: 78, SelectName: "78", name: 'Slot 78', IsChecked: false, Available: true },
  { id: 79, SelectName: "79", name: 'Slot 79', IsChecked: false, Available: false },
  { id: 80, SelectName: "80", name: 'Slot 80', IsChecked: false, Available: true },
  { id: 81, SelectName: "81", name: 'Slot 81', IsChecked: false, Available: false },
  { id: 82, SelectName: "82", name: 'Slot 82', IsChecked: false, Available: false },
  { id: 83, SelectName: "83", name: 'Slot 83', IsChecked: false, Available: true },
  { id: 84, SelectName: "84", name: 'Slot 84', IsChecked: false, Available: false },
  { id: 88, SelectName: "88", name: 'Slot 88', IsChecked: false, Available: true },
  { id: 86, SelectName: "86", name: 'Slot 86', IsChecked: false, Available: false },
  { id: 87, SelectName: "87", name: 'Slot 87', IsChecked: false, Available: false },
  { id: 88, SelectName: "88", name: 'Slot 88', IsChecked: false, Available: true },
  { id: 89, SelectName: "89", name: 'Slot 89', IsChecked: false, Available: false },
  { id: 90, SelectName: "90", name: 'Slot 90', IsChecked: false, Available: false },
]
const form = [
  { Id: 1, Name: "Floor-I" },
  { Id: 2, Name: "Floor-II" },
  { Id: 3, Name: "Floor-III" },
  { Id: 4, Name: "Floor-IV" },
  { Id: 5, Name: "Floor-V" },
]

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      foundation: '',
      data: list,
      checked: false,
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      formList: form,
      checkedHome: [],
      inspections: [],
    };
  }



  check(book) {
    this.setState({
      checkedHome: book
    })
    console.log("book:", this.state.checkedHome)
  }

  printBookingSection2 = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {this.state.data.map((book, index) => {
          return (
            <TouchableOpacity
              onPress={() => this.check(book, index)}
              key={book.id}
              disabled={book.Available ? true : false}
              style={book.Available ? styles.disable : styles.enable}>
              <Text>{book.SelectName}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }



  printBookingSection = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 5, flexWrap: 'wrap' }}>
        {this.state.data.map((book, index) => {
          return (
            <View>
              {book.Available ?
                <CheckBox
                  size={1}
                  center
                  key={book.id}
                  title={book.SelectName}
                  checked={book.id === this.state.checkedHome.id ? true : false}
                  onPress={() => this.check(book, index)}
                  containerStyle={{ width: 20, height: 20, }}
                  textStyle={{ position: 'absolute' }}
                />
                : <CheckBox
                  disabled
                  size={1}
                  center
                  key={book.id}
                  title={book.SelectName}
                  containerStyle={{ backgroundColor: 'gray', width: 20, height: 20 }}
                  textStyle={{ position: 'absolute' }}
                />}
            </View>
          )
        })}
      </View>
    )
  }



  printDateSection = () => {
    return (
      <Card>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Selected Room: </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.state.checkedHome.name}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 6 }}>From Date: </Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.startDate}
            mode="date"
            placeholder="mm/dd/yyyy"
            format="YYYY-MM-DD"
            minDate="2020-21-01"
            maxDate="2020-06-02"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                width: 0,
                height: 0
              },
              dateInput: {
                marginLeft: 10
              }
            }}
            onDateChange={(startDate) => { this.setState({ startDate: startDate }) }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 6 }}>Time: </Text>
          <DatePicker
            style={{ width: 242, paddingLeft: 40 }}
            date={this.state.startTime}
            mode="time"
            //placeholder="Time"
            format="HH:MM A"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                width: 0,
                height: 0
              },
              dateInput: {
                marginLeft: 10
              }
            }}
            onDateChange={(startTime) => { this.setState({ startTime: startTime }) }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 6 }}>To Date: </Text>
          <DatePicker
            style={{ width: 225, paddingLeft: 22 }}
            date={this.state.endDate}
            mode="date"
            placeholder="mm/dd/yyyy"
            format="YYYY-MM-DD"
            minDate="2020-21-01"
            maxDate="2020-06-02"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                width: 0,
                height: 0
              },
              dateInput: {
                marginLeft: 10
              }
            }}
            onDateChange={(endDate) => { this.setState({ endDate: endDate }) }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 6 }}>To </Text>
          <DatePicker
            style={{ width: 270, paddingLeft: 67 }}
            date={this.state.endTime}
            mode="time"
            format="HH:MM A"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                width: 0,
                height: 0
              },
              dateInput: {
                marginLeft: 10
              }
            }}
            onDateChange={(endTime) => { this.setState({ endTime: endTime }) }}
          />
        </View>
        <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#000033', padding: 12, marginTop: 30 }}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </Card>
    )
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#000033' }}>
          <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Slot Booking</Text>
          </View>
        </Header>
        <View style={{ padding: 20 }}>
          <View style={{ marginTop: 50, flexDirection: 'row' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 11 }}>Select Floor</Text>
            <View style={{ paddingLeft: 20 }}>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 30, width: 160, backgroundColor: '#000033', marginTop: 8, color: 'white' }}
                onValueChange={(itemValue, itemIndex) => {
                  console.log("itemValue: ", itemValue)
                  this.setState({ language: itemValue, checkedHome: [] })
                }
                }>
                <Picker.Item label="Select Floor" value="" style={{ width: 300 }} />
                {this.state.formList.map(forms => <Picker.Item label={forms.Name} value={forms.Id} key={forms.Id} />)}
              </Picker>
            </View>
          </View>
          {this.state.language && !this.state.checkedHome.id ?
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              {this.printBookingSection2()}
            </View>
            : null}
          {this.state.language && this.state.checkedHome.id ? this.printDateSection() : null}
        </View>
      </Container>
    );
  }
}

const size = width / 10 - 8;
const styles = StyleSheet.create({
  cardImage: {
    height: 45,
    width: 45,
    alignSelf: 'center'
  },
  enable: { backgroundColor: 'grey', margin: 1, width: size, height: size, alignItems: 'center', justifyContent: 'center' },
  disable: { backgroundColor: 'grey', opacity: 0.3, margin: 1, width: size, height: size, alignItems: 'center', justifyContent: 'center' }
});
