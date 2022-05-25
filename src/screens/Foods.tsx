import * as React from 'react'
import { 
    ScrollView, Text, View, 
    Modal, TouchableOpacity, SafeAreaView,
    StyleSheet
} from 'react-native'
import { Header } from 'react-native-elements'
import styled from 'styled-components'
import {LinearGradient} from 'expo-linear-gradient';
import { ListItem, Avatar } from '@rneui/themed'

const Page = styled(View)`
    padding: 40px 30px 100px 30px;
`

const list = [
    {
      name: 'Tokbokki',
      avatar_url: 'http://product.hstatic.net/200000402581/product/chen_banh_sot_5d362cfef07d476c8ae3d81c64c08346_552235a768a34ce5bc344014f077b808_grande.png',
      subtitle: 'Món ăn đường phố đến từ Hàn Quốc được làm từ gạo'
    },
    {
        name: 'Takoyaki',
        avatar_url: 'https://www.huongnghiepaau.com/wp-content/uploads/2018/03/66121bc28c9d23f8a6cd26cc53117b58.jpg',
        subtitle: 'Món ăn phổ biến ở Nhật Bản'
    },
    {
        name: 'Mochi',
        avatar_url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2020/08/Mochi-Ice-cream-WS-Thumbnail.jpeg',
        subtitle: 'Món tráng miệng truyền thống của Nhật Bản'
    },
    {
        name: 'Macaron',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/VanillaMacaron.jpg',
        subtitle: 'Một trong những món đồ ngọt được yêu thích nhất hiện nay'
    },
    {
        name: 'Gà rán',
        avatar_url: 'https://cdn.tgdd.vn/Files/2021/01/13/1320026/cach-lam-ga-ran-kfc-bang-noi-chien-khong-dau-gion-rum-an-khong-ngay-202202231031137197.jpg',
        subtitle: 'Món ăn tuy đơn giản nhưng cực kỳ cuống hút'
    },
    {
        name: 'Chè khúc bạch',
        avatar_url: 'https://cdn.tgdd.vn/Files/2017/10/09/1031511/cach-lam-che-khuc-bach-mem-tan-mat-lanh-giai-nhiet-mua-he-202201101220264914.jpg',
        subtitle: 'Một trong những món chè được yêu thích nhất hiện nay ở Việt Nam'
    },
    {
        name: 'Cơm tấm sườn bì chả',
        avatar_url: 'https://cdn.daynauan.info.vn/wp-content/uploads/2019/05/com-tam-la-mon-an-binh-dan.jpg',
        subtitle: 'Món ăn không thể thiếu trong lòng của người Sài thành'
    },
  ]

const Foods: React.FC = () => {
    return (
        <>
            <View>
                <Header
                    centerComponent={{text: "Các món ăn", style: {color: '#fff', fontSize: 30 , fontWeight: 'bold'}}} 
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: ['white', 'black'],
                        start: { x: 0, y: 0.2 },
                        end: { x: 1, y: 0.5 }
                    }}
                />
                <ScrollView>
                <Page>
                    <View>
                        {
                            list.map((l, i) => (
                            
                                <ListItem key={i} bottomDivider>
                                    <Avatar source={{uri: l.avatar_url}} size={100}/>
                                    <ListItem.Content>
                                    <ListItem.Title style={{fontWeight:"bold",fontSize:22}}>{l.name}</ListItem.Title>
                                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            
                            ))
                        }
                    </View>
                    
                </Page>
                </ScrollView>
            </View>
        </>
    )
}
export default Foods