import Thumbnail1 from "./assets/flag1.png"
import Thumbnail2 from "./assets/flag2.png"
import Thumbnail3 from "./assets/flag3.png"
import Thumbnail4 from "./assets/flag4.jpg"
import Candidate1 from "./assets/candidate1.jpg"
import Candidate2 from "./assets/candidate2.jpg"
import Candidate3 from "./assets/candidate3.jpg"
import Candidate4 from "./assets/candidate4.jpg"
import Candidate5 from "./assets/candidate5.jpg"
import Candidate6 from "./assets/candidate6.jpg"
import Candidate7 from "./assets/candidate7.jpg"



export const elections = [
  {
    id: "e1",
    title: "Harvard Presidential Elections 2024",
    description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    thumbnail: Thumbnail1,
    candidates: ["c1", "c2", "c3", "c4"],
    voters: []
  },
  {
    id: "e2",
    title: "Legon SRC Presidential Elections 2024",
    description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    thumbnail: Thumbnail2,
    candidates: ["c5", "c6", "c7"],
    voters: []
  },
  {
    id: "e3",
    title: "Stanford Presidential Elections 2024",
    description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.",
    thumbnail: Thumbnail3,
    candidates: [],
    voter: []
  },
  {
    id: "e4",
    title: "KNUST Hall Week Committee Elections",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: Thumbnail4,
    candidates: ["c5", "c3"],
    voters: ["v3"]
  },
  // {
  //   "id": "e5",
  //   "title": "Global Climate Policy Referendum",
  //   "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   "thumbnail": "Thumbnail5",
  //   "candidates": ["c10", "c11", "c12"],
  //   "voters": []
  // },
  // {
  //   "id": "e6",
  //   "title": "Local Community Board 2025",
  //   "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  //   "thumbnail": "Thumbnail6",
  //   "candidates": [],
  //   "voters": ["v4", "v5"]
  // }
]



export const voters = [
  {
    id: "v1",
    fullName: "Ernest Achiever",
    email: "achiever@gmail.com",
    password: "achiever123",
    isAdmin: true,
    votedElections: ["e2"]
  },
  {
    id: "v2",
    fullName: "Doris Lartey",
    email: "doris@gmail.com",
    password: "doris123",
    isAdmin: false,
    votedElections: ["e1", "e2"]
  },
  {
    id: "v3",
    fullName: "Sarah Mensah",
    email: "sarah.mensah@outlook.com",
    password: "sarahpass",
    isAdmin: false,
    votedElections: ["e4", "e5"]
  },
  {
    id: "v4",
    fullName: "Michael Kyerematen",
    email: "mike.k@yahoo.com",
    password: "mikevoter",
    isAdmin: true,
    votedElections: ["e6"]
  },
  {
    id: "v5",
    fullName: "Abigail Ofori",
    email: "abbyofori@gmail.com",
    password: "abigaila1",
    isAdmin: false,
    votedElections: []
  }
]

export const candidates = [
  {
    id: "c7",
    fullName: "Linda Osei",
    image: Candidate7,
    motto: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    voteCount: 15,
    election: "e4"
  },
  {
    id: "c5",
    fullName: "Kwame Adu",
    image: Candidate5,
    motto: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
    voteCount: 12,
    election: "e4"
  },
  {
    id: "c3",
    fullName: "Elikem Amoah",
    image: Candidate3,
    motto: "Duis vestibulum enim ut neque tincidunt, ac dapibus nulla facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
    voteCount: 350,
    election: "e4"
  },
  {
    id: "c3",
    fullName: "Elikem Amoah",
    image: Candidate4,
    motto: "Duis vestibulum enim ut neque tincidunt, ac dapibus nulla facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
    voteCount: 350,
    election: "e2"
  },
  {
    id: "c3",
    fullName: "Elikem Amoah",
    image: Candidate3,
    motto: "Duis vestibulum enim ut neque tincidunt, ac dapibus nulla facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
    voteCount: 350,
    election: "e2"
  },
  {
    id: "c3",
    fullName: "Elikem Amoah",
    image: Candidate7,
    motto: "Duis vestibulum enim ut neque tincidunt, ac dapibus nulla facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
    voteCount: 350,
    election: "e3"
  },
  {
    id: "c3",
    fullName: "Elikem Amoah",
    image: Candidate3,
    motto: "Duis vestibulum enim ut neque tincidunt, ac dapibus nulla facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
    voteCount: 350,
    election: "e3"
  },
  {
    id: "c6",
    fullName: "Regina Boateng",
    image: Candidate6,
    motto: "Ut vitae nisl nec odio egestas bibendum. Maecenas nec tellus a sapien rhoncus euismod. Sed a purus a massa euismod euismod.",
    voteCount: 420,
    election: "e4"
  },
  {
    id: "c1",
    fullName: "Enoch Ganyo",
    image: Candidate1,
    motto: "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
    voteCount: 23,
    election: "e1"
  },
  {
    id: "c2",
    fullName: "John Asiama",
    image: Candidate2,
    motto: "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
    voteCount: 18,
    election: "e1"
  }
]