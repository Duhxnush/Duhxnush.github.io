import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Knowledge Center");
    }

    async getHtml() {
        return `
        <div style="background-color: rgb(3, 137, 3);border-radius: 5px;"><h1 align="center">forestonline.go<br></h1></div>
        
        <center>
        <h1>Information Center</h1>
        Search : <input type="search" placeholder="Search">
        <h3>The Great Indian Bustard</h3>
        <video controls>
            <source src="videos/videoplayback.mp4" >
        </video>
        <div style="width: 60%;">
        <p>
             The Great Indian Bustard Ardeotis nigriceps, a spectacularly large flying bird once widespread across India and Pakistan,
             is at the verge of extinction. Today, only 150 individuals are estimated to be in the wild, their grassland habitat decimated 
             by massive industrialisation and pesticide-heavy farming. Newer threats include low-lying electrical wires and solar power plants.
        </p>
        </div>
        <audio controls>
            <source src="audios/Mating Call of the Bustard.webm">
        </audio><br><br>
        <h3>The White Winged Wood Duck</h3>
        <video controls>
            <source src="videos/videoplayback (1).mp4" width="60%">
        </video>
        <div style="width: 60%;">
            <p>
                A rare, shy and secretive bird, the White-winged Wood Duck Asarcornis scutulata can be found,
                 if you’re lucky, within small pockets of Assam’s forest wetlands,
                  a habitat threatened by oil explorations and disasters.
            </p>
        </div>
        <audio controls>
            <source src="audios/Wood Duck Video, Wood Duck Sound (4k).webm">
        </audio><br><br>
        <h3>Masked Finfoot</h3>
        <video controls >
            <source src="videos/videoplayback (2).mp4" codecs="avc1.42E01E, mp4a.40.2">
        </video>
        <div style="width: 60%;">
            <p>
                The Masked Finfoot Heliopais personatus, with the body of a duck but a pointed beak, was once found in Northeast India. 
                Now, a few populations survive in the mangroves of the Sundarbans, where rising sea levels pose imminent danger. Photo: Jainy Kuriakose.
            </p>
        </div>
        <h3>White Bellied Heron</h3>
        <video controls>
            <source src="videos/videoplayback (3).mp4" width="40%">
        </video>
        <div style="width: 60%;">
            <p>
                A large and slow-growing species, the White-bellied Heron Ardea insignis is the second-largest heron in the world. 
                Recorded mostly from Namdapha in Arunachal Pradesh, it is now Critically Endangered as suitable sites for the species are threatened by dam expansion.
            </p>
        </div>
        <audio controls>
            <source src="audios/White Bellied Sea Eagle Call ( Haliaeetus leucogaster ).mp3 ">
        </audio><br><br>
        
        <div style="background-color:rgb(233, 218, 159);width: 60%;border-radius: 20px;"><h3>Report Your Findings</h3>
        <table cellpadding="20px">
            <tr>
                <td align="right">Animal Name:</td>
                <td align="center"><input type="Text" name="aname"></td>
            </tr>
            <tr>
                <td align="right">Coordinates:</td>
                <td align="center"><input type="button" onclick="getlocation()" value="Locate me"><br>
                    <span ><p id="demo1"></p></span></td>
            </tr>
            <tr>
                <td align="right">Choose Color:</td>
                <td align="center"><input type="color"></td>
            </tr>
            <tr>
                <td align="right">Submit sighting pictures:</td>
                <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="file"></td>
            </tr>
            <tr>
                <td align="right">Date Of Sighting:</td>
                <td align="center"><input type="date"></td>
            </tr>
        </table><br>
        <input type="submit">
    <br><br>
    </div>
        `;
    }
}