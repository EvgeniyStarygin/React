import React from "react";
import MobileCompany from "./MobileCompany";

const clientsArr = [
    { id: 101, lastname: "Иванов", firstname: "Иван", patronymic: "Иванович", balance: 200 },
    { id: 105, lastname: "Сидоров", firstname: "Сидор", patronymic: "Сидорович", balance: 250 },
    { id: 110, lastname: "Петров", firstname: "Петр", patronymic: "Петрович", balance: 180 },
    { id: 120, lastname: "Григорьев", firstname: "Григорий", patronymic: "Григорьевич", balance: -220 },
];

class App extends React.PureComponent {

    render() {
        console.log("render APP");
        return (<
            MobileCompany clients={clientsArr}
        />
        );
    }
}

export default App;