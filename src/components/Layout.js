import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#fff',
        alignItems: 'center',
        display:'flex',
        flexDirection: 'column',
        
    }
}
class Layout extends Component {
    render(){
        return(
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

}
export default Layout