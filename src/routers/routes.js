//AUTH
const AUTH = "/auth";
const JOIN = "/join";
const LOGIN = "/login";
const AUTH_REGISTER = "/register";

//USERS
const USERS = "/users";
const USER_UPDATE = "/update/:id";
const REQUEST_PROPOSALS = "/proposals";
const USER_SCHEDULES = "/schdules";

//PARTNERS
const PARTNERS = "/partners";
const PARTNER_PROPOSALS = "/proposals";
const PARTNER_SCHEDULE = "/schedule";
const CREATE_SCHEDULE = "/schedule/create";


//POSTS
const POSTS = "/posts";
const POST_LIST = "/list";
const POST_CREATE = "/create";
const POST_UPDATE = "/update/:id";

//PETS
const PETS = "/pets";
const PET_REGISTER = "/register";

//PROPOSAL


//CONTRACTS



const routes = {
    auth: AUTH,
    users: USERS,
    partners: PARTNERS,
    pets: PETS,
    posts: POSTS,
    join: JOIN,
    login: LOGIN,
    authRegister: AUTH_REGISTER,
    userUpdate: id => {
        if(id)  return `/users/update/${id}`;
        else return USER_UPDATE;
    },
    postUpdate: id => {
        if(id) return `/posts/update/${id}`;
        else return POST_UPDATE;
    },
    requestProposals: REQUEST_PROPOSALS,
    userSchedules: USER_SCHEDULES,
    partnerProposals: PARTNER_PROPOSALS,
    partnerSchedule: PARTNER_SCHEDULE,
    createSchedule: CREATE_SCHEDULE,
    postList: POST_LIST,
    createPost: POST_CREATE,
    updatePost: POST_UPDATE,
    petRegister: PET_REGISTER,
};

export default routes;