import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 30,
        fontFamily: 'Roboto'
    },
    title: {
        fontSize: 50,
        textAlign: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInput: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 10,
    },
    Button: {
        borderWidth: 2,
    },
    switchRow: {
        flexDirection: 'row',
        padding: 5,
        flex: 1,
        justifyContent: 'flex-end',
    },
    switch: {
        alignSelf: "center",
    },
    redTitle: {
        fontSize: 50,
        textAlign: 'center',
        color: 'red',
    },
    greenTitle: {
        fontSize: 50,
        textAlign: 'center',
        color: 'green',
    }
});



