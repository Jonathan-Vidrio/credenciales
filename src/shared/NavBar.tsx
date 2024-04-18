import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../components/Home';
import { StudentID } from '../components/StudentID';
import { Benefits } from '../components/Benefits';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name={'Perfil'}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'Credencial'}
        component={StudentID}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="id-card"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={'Beneficios'}
        component={Benefits}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="gift"
              color={color}
              size={size}
              style={styles.icon}
            />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = {
  icon: {
    paddingTop: 10,
  },
};
