import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div style="background-color: rgb(3, 137, 3);border-radius: 5px;"><h1 align="center">forestonline.go</h1></div>
        
        
        <div align="center">
            <h1>Home</h1>
            <h3>Welcome to Forest Portal</h3>   
        </div>
        <div class="bord">
            <div class="ptex">
                <p>
                The importance of forests cannot be underestimated. 
                We depend on forests for our survival, from the air we breathe to the wood we use. 
                Besides providing habitats for animals and livelihoods for humans, forests also offer watershed protection, prevent soil erosion and mitigate climate change.
                </p>
            </div>
            <div class="ptex">
                Forests are very crucial for these reason:
                <ol>
                    <li>Promoting rainfall</li>
                    <li>Reduces noise pollution</li>
                    <li>Maintains the ecological balance.</li>
                    <li>Acts as a wind barrier from heavy winds</li>
                    <li>Provide moisture and lower the temperature</li>
                    <li>Prevents flash floods by slowing down the movement of water...</li>
                </ol>
            </div>
        </div>

        <div style="margin-top: 20px;" class="ptex">
            <table class="dest">
                <tr>
                    <th  colspan="3"><h3>Effects of Deforestation:</h3></th>
                </tr>
                <tr height="30%">
                    <td width="30%" align="center"><img src="images/def1.jpg" width="80%"><figcaption><b>Soil erosion</b></figcaption></td>
                    <td width="30%" align="center"><img src="images/def2.jpg" width="80%"><figcaption><b>Whirlwinds and Gusts</b></figcaption></td>
                    <td width="30%" align="center"><img src="images/def3.webp" width="80%"><figcaption><b>Deserts</b></figcaption></td>
                </tr>
            </table>
        </div>

        <div class="bord" align="center">
            <h3>India Map</h3>
            <img src="/images/india-map.jpg" usemap="#workmap"><br><br>
            <map name="workmap">
                <area shape="circle" coords="211,745,5" alt="Kerala" href="https://forest.kerala.gov.in">
                <area shape="circle" coords="295,630,5" alt="Tamilnadu" href="https://forest.tn.gov.in">
                <area shape="circle" coords="228,632,5" alt="Karnataka" href="https://aranya.gov.in">
                <area shape="circle" coords="302,544,5" alt="Andhrapradesh" href="https://forest.ap.gov.in">
                <area shape="circle" coords="251,521,5" alt="Telangana" href="https://forest.telangana.gov.in">
                <area shape="circle" coords="115,481,5" alt="Maharashtra" href="https://mahaforest.gov.in">
                <area shape="circle" coords="116,440,5" alt="Daman and Diu" href="https://daman.nic.in/dept-of-forest.aspx">
                <area shape="circle" coords="110,370,5" alt="Gujarat" href="https://forests.gujarat.gov.in">
                <area shape="circle" coords="191,277,5" alt="Rajasthan" href="https://forest.rajasthan.gov.in/content/raj/forest/en/home.html">
                <area shape="circle" coords="231,232,5" alt="Harayana" href="https://haryanaforest.gov.in/">
                <area shape="circle" coords="308,282,5" alt="Uttar Pradesh" href="http://upforest.gov.in/web/forestnew/Default.aspx">
                <area shape="circle" coords="225,371,5" alt="Madhya Pradesh" href="https://www.mpforest.gov.in/">
                <area shape="circle" coords="408,307,5" alt="Bihar" href="https://forestonline.bihar.gov.in/">
                <area shape="circle" coords="414,369,5" alt="Jharkand" href="https://forest.jharkhand.gov.in/">
                <area shape="circle" coords="432,445,5" alt="Odisha" href="https://www.odishaforest.in/index.html">
                <area shape="circle" coords="485,386,5" alt="West Bengal" href="http://www.westbengalforest.gov.in/">
                <area shape="circle" coords="488,262,5" alt="Sikkim" href="http://www.sikkimforest.gov.in/">
                <area shape="circle" coords="565,292,5" alt="Assam" href="http://forest.assam.gov.in/">
                <area shape="circle" coords="565,308,5" alt="Meghalaya" href="https://megforest.gov.in/">
                <area shape="circle" coords="552,352,5" alt="Tripura" href="https://forest.tripura.gov.in/">
                <area shape="circle" coords="588,354,5" alt="Mizoram" href="https://forest.mizoram.gov.in/">
                <area shape="circle" coords="616,324,5" alt="Manipur" href="https://forest.manipurforest.gov.in/">
                <area shape="circle" coords="619,303,5" alt="Nagaland" href="https://forest.nagaland.gov.in/">
                <area shape="circle" coords="605,265,5" alt="Arunachal Pradesh" href="https://forest.nagaland.gov.in/">
                <area shape="circle" coords="241,188,5" alt="Uttarakhand" href="https://forest.nagaland.gov.in/">
                <area shape="circle" coords="213,178,5" alt="Punjab" href="https://forest.nagaland.gov.in/">
                <area shape="circle" coords="222,167,5" alt="Himachal Pradesh" href="http://hpforest.gov.in/">
                <area shape="circle" coords="171,87,5" alt="Jammu and Kashmir" href="https://jkforest.gov.in/">
                <area shape="circle" coords="233,85,5" alt="Ladakh" href="https://leh.nic.in/department/forest-department/">
            </map>
              
            *Click on the black dots/Capital cities to move to the respective state forest portal
        </div>
        <div>
            <form>
                <div align="center">
                <h3>Please Give Your Valuable Feedback</h3><br>
                Enter your Name : <input type="text"><br><br>
                Enter your email :&nbsp; <input type="email"><br><br>
                <textarea placeholder="Enter your feedback in 100 characters" rows="5" cols="40"></textarea><br><br>
                Rate us on scale of 1-5:<br>
                <input type="radio" value="1">
                <input type="radio" value="2">
                <input type="radio" value="3">
                <input type="radio" value="4">
                <input type="radio" value="5"><br>
                <input type="checkbox" value="1"> I Accept the terms and Condititons<br><br>    
                <input type="submit">
                </div>
                
            </form>
        </div>

        <table border="0" width="80%" align="center" style="margin-top: 40px; background-color: gray;border-radius: 20px;">
            <tr>
                <td rowspan="3" width="30%" align="right"><img src="images/follow.png" width="60%"></td>
                <td width="7%" align="right"><img src="images/ig.png" width="80%"></td>
                <td width="20%">instagram.com/@duh</td>
                <td rowspan="3" ><font size="5px">Other Links
                    <ul>
                        <li><a href="lab2.html">Information Center</a></li>
                        <li><a href="canvas.html">Canvas</a></li>
                        <li><a href="lab3.xml">XML Lab3</a></li>
                        <li><a href="lab4.html">Edit XML(lab4)</a></li>
                        <li><a href="lab5.html">Signup(lab5)</a></li>
                        <li><a href="lab6.html">Forest Tour Booking(lab6)</a></li>
                    </ul></font>
                </td>
            </tr>
            <tr>
                <td width="10%" align="right"><img src="images/twitter.png" width="80%"></td>
                <td width="30%">twitter.com/@duh</td>
            </tr>
            <tr>
                <td width="10%" align="right"><img src="images/yt.png" width="80%"></td>
                <td width="30%">instagram.com/@duhx</td>
            </tr>
        </table>
        `;
    }
}