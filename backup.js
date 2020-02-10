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
  Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Container, Header, Content, Form } from "native-base";
import { CheckBox, Icon, Card } from 'react-native-elements'

const list = [
  { id: 1, SelectName: "Select", name: 'Room 1', IsChecked: false, Available: true },
  { id: 2, SelectName: "Select", name: 'Room 2', IsChecked: false, Available: true },
  { id: 3, SelectName: "Select", name: 'Room 3', IsChecked: false, Available: true },
  { id: 4, SelectName: "Select", name: 'Room 4', IsChecked: false, Available: false },
  { id: 5, SelectName: "Select", name: 'Room 5', IsChecked: false, Available: true },
  { id: 6, SelectName: "Select", name: 'Room 6', IsChecked: false, Available: true },
  { id: 7, SelectName: "Select", name: 'Room 7', IsChecked: false, Available: true },
  { id: 8, SelectName: "Select", name: 'Room 8', IsChecked: false, Available: false },
  { id: 9, SelectName: "Select", name: 'Room 9', IsChecked: false, Available: true }
]
const form = [
  { Id: 1, Name: "Form-I" },
  { Id: 2, Name: "Form-II" },
  { Id: 3, Name: "Form-III" },
  { Id: 4, Name: "Form-IV" },
  { Id: 5, Name: "Form-V" },
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
    //book.IsChecked = !book.IsChecked;
    this.setState({
      checkedHome: book
    })
    console.log("book: ",this.state.checkedHome)
  }


  printBookingSection = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.state.data.map((book, index) => {
          return (
            <View>
              {book.Available ?
              <CheckBox
                containerStyle={{ width: 100, padding: 5, height: 35, backgroundColor: '#FFF', borderColor: '#333', borderWidth: 1 }}
                key={book.id}
                title={book.SelectName}
                checked={book.id === this.state.checkedHome.id ? true : false}
                onPress={() => this.check(book, index)}
              />: 
              <View style={{width: 120, padding: 5, height: 35, backgroundColor: '#FFF' }}></View>
              }
              {book.Available ? 
              <Icon size={55} name='home' type='font-awesome' color='green' /> 
                : 
              <Icon size={55} name='home' type='font-awesome' color='#f50' />
              }
              <Text style={{ textAlign: 'center', marginBottom: 15, color:'green', fontSize:15, fontWeight:'bold' }}>{book.name}</Text>
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
            minDate="2016-05-01"
            maxDate="2016-06-01"
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
            minDate="2016-05-01"
            maxDate="2016-06-01"
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
      </Card>
    )
  }

  render() {
    return (
      <Container style={{ flex: 1, padding: 15 }}>
        <View style={{ marginTop: 50, flexDirection: 'row' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 11 }}>Select Row</Text>
          <View style={{ paddingLeft: 20 }}>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 30, width: 120, backgroundColor: '#224275', marginTop: 8, color: 'white' }}
              onValueChange={(itemValue, itemIndex) =>
               {  console.log("itemValue: ",itemValue)
                  this.setState({ language: itemValue, checkedHome: [] })}
              }>
              <Picker.Item label="Select Floor" value="" style={{width:300}} />
              {this.state.formList.map(forms => <Picker.Item label={forms.Name} value={forms.Id} key={forms.Id} />)}
            </Picker>
          </View>
        </View>
        {this.state.language && !this.state.checkedHome.id ? 
        <View style={{ marginTop: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Available Rooms:</Text>
          {this.printBookingSection()}
        </View>
        : null }
        
        {this.state.language && this.state.checkedHome.id ? this.printDateSection() : null}
          

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardImage: {
    height: 45,
    width: 45,
    alignSelf: 'center'
  },

}); 