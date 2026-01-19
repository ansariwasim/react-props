
// import './App.css'
import  {NAVBAR} from './components/NAVBAR'
import CARD from './components/CARD'

function App() {

const jobListings = [
  {
    id: 1,
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    jobTitle: "Senior Software Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    id: 2,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    tag1: "Part-time",
    tag2: "Senior level",
    pay: "$120/hr",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    jobTitle: "Product Manager",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$135/hr",
    location: "Menlo Park, CA"
  },
  {
    id: 4,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "3 days ago",
    jobTitle: "iOS Developer",
    tag1: "Contract",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Cupertino, CA"
  },
  {
    id: 5,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "12 hours ago",
    jobTitle: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$180/hr",
    location: "Los Gatos, CA"
  },
  {
    id: 6,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    jobTitle: "Cloud Architect",
    tag1: "Full-time",
    tag2: "Expert level",
    pay: "$160/hr",
    location: "Hyderabad, India"
  },
  {
    id: 7,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "4 days ago",
    jobTitle: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$145/hr",
    location: "Austin, TX"
  },
  {
    id: 8,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    companyName: "Spotify",
    datePosted: "6 days ago",
    jobTitle: "Backend Developer",
    tag1: "Remote",
    tag2: "Junior level",
    pay: "$85/hr",
    location: "Stockholm, Sweden"
  },
  {
    id: 9,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    companyName: "Airbnb",
    datePosted: "1 month ago",
    jobTitle: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Senior level",
    pay: "$125/hr",
    location: "London, UK"
  },
  {
    id: 10,
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    jobTitle: "UX Researcher",
    tag1: "Part-time",
    tag2: "Mid level",
    pay: "$110/hr",
    location: "Noida, India"
  }
];

  return (
    <>
  
    <div className='flex flex-wrap gap-4 justify-center mt-4 '>

  {jobListings.map((ele, ind)=>{
    return <div key= {ind}> 
     <CARD brandLogo = {ele.brandLogo} company={ele.companyName} datePosted = {ele.datePosted} jobTitle = {ele.jobTitle}  tag1 = {ele.tag1} tag = {ele.tag2} pay = {ele.pay} location = {ele.location}/>


    </div>
  })}





    </div>

    </>
  )
}

export default App
