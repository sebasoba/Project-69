export default class ScanScreen extends React.Component {
    comstructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
}

getCameraPermission()

handleBarCodeScanner()