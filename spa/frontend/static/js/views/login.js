import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        <div style="background-color: rgb(3, 137, 3);border-radius: 5px;"><h1 align="center">forestonline.go</h1></div>
        <form method="POST" name="myform">
        <div class="center">
            <table align="center" width="100%" style="background-color:#abdbe3;border-radius:20px;">
                <tr>
                    <td align="center" width="50%"><br><img src="farmer.jpg" height="500px"><br><br></td>
                    <td align="center" width="50%"><h2>Signup Now!</h2><br>
                        Enter Name:<br><input type="text" id="txtName"><br><br>
                        Enter Mobile:<br><input type="text" id="mobno"><br><br>
                        Enter Email:<br><input type="email" id="email"><br><br>
                        Enter Password:<br><input type="password" id="pass"><br><br>
                        Re-enter Password:<br><input type="password" id="cpass"><br><br><br>
                        <div class="h-captcha" data-sitekey="05427f31-111f-4829-848d-15e03d001c69" style="width: auto;"></div><br>
                        <button onclick="validate()">submit</button>
                    </td>
                </tr>
            </table>
        </div>
        `;
    }
}