
import './App.css';
import Profile from "./profile/Profile";

let ProfilePhotoStyle = {
  border: "2px solid white",
  padding: "10px",
  borderRadius: "50px 20px",
  width: "200px",
  height: "200px"
}

let Summary = ` Highly motivated sales executive with extensive customer service and sales experience .
worked for 3 years at TUI Tunisia ,
Adept at working with Agile and Scrum cultures to accomplish projects. Highly motivated, dependable and I have excellent organizational skills. `;

const handleName = (name) => alert(`Profile name is ${name}`);


function App() {
  return (
    <div className="App">
      <Profile
                fullName="MARIEM CHLIF "
                bio={Summary}
                profession=" SALES EXECUTIVE  "
                handleName={handleName}
            >
                <img
                    src="/photo.png"  style={ProfilePhotoStyle} alt="my_profile" />
            </Profile>
    </div>
  );
}

export default App;