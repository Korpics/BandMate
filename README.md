# BandMate
Tinder inspired Band Member match maker.

A Full-Stack Application that matches users with potential band members based on Music Influence, Genre, Distance, or Instrument. 

Jerry McJamsAlot has been playing a ton of guitar in his small dark apartment lately. He would like to take things a step further and maybe try to start a band. The issue is that Jerry grew up listening to Robert Smith and dancing to Crystal Castles - and had no interest in collabing with his childhood friend Mikey - who was a huge U2 fan (Me too Mikey, Boy was a great album). Yet because of Jerry's limited resources(and friends), he had no choice but to attempt formation with one of the only musicians he's currently in touch with.  Knowing this, he decided to to download BandMate - an application for musicians who would like to quickly connect with like minded individuals NYC musicians in hopes of forming a band. Jerry has started many bands in the past - but always found that he was pouring hours of invested time into a band of musicians that simply do not mix. Knowing this application was meant for talanted musicians to address their needs efficiently, Jerry gave it a try.. and managed to get a few matches in just a handful of hours. 

Wireframes
https://imgur.com/a/d9HDLbJ


Priority Matrix

- Must be able to search through potential members with one or more of the following filters: (Instrument, Influence, Genre, or Distance)

- Must have authorization.

- Must be able to save matched users until one party has decided to rid themselves of the relationship.

- Should be able to automatically get location from user (if this becomes too difficult - then this becomes an application solely for NYC)

- Should be able to Flag users which will mark the user with a boolean property 'flagged: true' which notifies this status to admin. 

- Should be able to chat with users through the application (will implement an email option if not possible)

- Could add a sound toggle attached to an uploaded mp3 (would need to use aws for this i presume) that plays a sound snippet of the user's own music. (WILL add soundcloud link form at the very least. Pondering on whether or not music uploads should be a required feature. Would like to devote this site to dedicated musicians.)

- Could have user images (wondering if this is at all nessecary. I believe this could result in discriminatory practices from user to user?)

- Won't have (TBD - probably a lot of stuff)


MVP/PostMVP - 5min
MVP
Auth/JWT
Users can create update and delete their profiles. 
They can Create and Delete their own posts that are shwon to all users. (ads placed for creating music projects with others who are interested)


POST
Chat function within the application.
Location is automatically sent to the back-end when user is signed in.
Default homepage renders the closest matching musicians (this would be a summary of all the user's properties + distance)
Toggle Sound per 'User Card' to hear a snippet of original music from the creator/user.
Can add comments to ads.


ERD
https://imgur.com/a/vFucqDA (Still figuring this out)

UI Components

└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── Ads.js
    │   ├── Dashboard.js
    │   ├── Footer.js
    │   ├── Friends.js
    │   ├── Header.js
    │   ├── Login.js
    │   ├── Main.js
    │   ├── Match.js
    │   ├── Post.js
    │   ├── Settings.js
    │   ├── Signup.js
    │   └── Users.js
    ├── index.css
    ├── index.js
    └── services
        ├── authApi.js
        ├── postApi.js
        └── userApi.js





Additional Libraries
Auth/JWT/Passport
React
Bulma

SAMPLE.....
Library	What it Does
React - front end UI
Express/Node - BackEnd API creation.
JWT/bcrypt/passport - Authorization
Bulma - will attempt to maintain basic css instead of branching out into Bootstrap but may need to. 

Code Snippet
```  async handleLogin() {
    try {
        const { username, password} = this.state;
        const response = await login({username, password});
        console.log(response.user);
        const user = response.user
       await  this.setState({
            authenticated: true,
            user: user,
            signedup: true
            
        })
        console.log(this.state)
    }
    catch (e) {
        console.log(e.message);
    }
  }

  async handleSignup(){
    try {
      const { 
        username, password, 
        name, age, borrough, 
        influences, instrument, 
        genre, bio, link
      } = this.state;

      const payload = {
        "username": username,
        "password": password,
        "name": name,
        "bio": bio,
        "borrough": borrough,
        "influences": influences,
        "instrument": instrument,
        "genre": genre,
        "link": link,
        "age": age
      }

       console.log(this.state)
      const response = await signup(payload);
      this.setState({signedup: true})
    }
    catch (e) {
        console.log(e.message);
  }

  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
        return {[key]: value}});
  }


  handleLogOut = async(e) => {
    e.preventDefault();
    await this.setState({
      authenticated: false,
      username: '',
      password: '',
      name: '',
      age: '',
      borrough: '',
      influences: '',
      instrument: '',
      genre: '',
      bio: '',
      link: '',
      signedup: false,
      signupselect:false
  })
  };

  componentDidMount=()=>{
    this.fetchAllUsers()
    this.getAllPosts()
    console.log(this.state)

  }

  fetchAllUsers = async () => {
    const allUsers =  await getAllUsers();
    await this.setState({allUsers});
    console.log(this.state)

   }
   getAllPosts = async () => {
    const allPosts =  await fetchAllPosts();
    await this.setState({allPosts});
    console.log(this.state)

   }

   signupSelect = async(e) => {
     e.preventDefault()
     await this.setState({
        signupselect: true
     })
     

   }
   truthSet = async (e) => {
     e.preventDefault();
    await this.setState({signedup: true})
   }```
   
   

Change Log
TBD This will be full though I am sure.

Issues and Resolutions
TBD This will be full as well.
