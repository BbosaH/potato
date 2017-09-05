/**
 * Created by Lena on 04.09.2017.
 */
/**
 * Created by Lena on 21.08.2017.
 */
import React from 'React';
import {Text, View, TouchableWithoutFeedback} from 'react-native'


const ListItemRedux = (onPress, candidate) => {
  const {name, status, level, salary} = candidate

   return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>
              {name}, {status}, {level}, {salary}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = {
  titleStyle    : {
    fontSize   : 18,
    paddingLeft: 15
  },
  containerStyle: {
    flex           : 0.5,
    elevation      : 10,
    padding        : 5,
    backgroundColor: '#fff',
    shadowColor    : '#000',
    shadowOffset   : {width: 5, height: 10},
    shadowOpacity  : 0.5,
    flexDirection  : 'row',
    alignItems     : 'center',
    justifyContent : 'center',
    position       : 'relative',
  }
}

export {ListItemRedux};