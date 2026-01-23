import { SafeAreaView } from "react-native-safe-area-context"
import ThirdHeader from "../components/ThirdHeader"
import { StyleSheet } from "react-native"

const Mainscanerpage = () => {
  return (
    <SafeAreaView style={styles.showingCameracontainer} >
      <ThirdHeader />
      
    </SafeAreaView>
  )
}
export default Mainscanerpage

const styles = StyleSheet.create({
  showingCameracontainer: {
    flex: 1
  }
})