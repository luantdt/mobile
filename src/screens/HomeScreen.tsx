import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Foods from './Foods'
import Infor from './Infor'
import Oder from './Oder'
import HistoryOders from './HistoryOders'

const Tab = createBottomTabNavigator()

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Thức ăn"
        component={Foods}
        options={{ tabBarIcon: () => <Text>🍽️</Text> }}
      />
      <Tab.Screen
        name="Giỏ hàng"
        component={Oder}
        options={{ tabBarIcon: () => <Text>🍽️</Text> }}
      />
      <Tab.Screen
        name="Đơn đã đặt"
        component={HistoryOders}
        options={{ tabBarIcon: () => <Text>🍽️</Text> }}
      />
      <Tab.Screen
        name="Thông tin"
        component={Infor}
        options={{ tabBarIcon: () => <Text>🍽️</Text> }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
