//AUTH
const AUTH = "/auth";
const JOIN = "/join";
const LOGIN = "/login";
const AUTH_REGISTER = "/register";

//USERS
const USERS = "/users";
const USER_UPDATE = "/update/:id";
const PROPOSALS_CREATE = "/proposals";
const USER_SCHEDULS = "/schdules";

//PARTNERS
const PARTNERS = "/partners";
const PARTNER_PROPOSALS = "/proposals";
const PARTNER_CONTRACTS = "/contracts";
const CREATE_SCHEDULE = "/schedule/create";


//POSTS
const POSTS = "/posts";
const POST_LIST = "/list";
const POST_CREATE = "/create";
const POST_UPDATE = "/update";

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
    proposalCreate: PROPOSALS_CREATE,
    userContracts: USER_SCHEDULES,
    partnerProposals: PARTNER_PROPOSALS,
    partnerContracts: PARTNER_CONTRACTS,
    createSchedule: CREATE_SCHEDULES,
    postList: POST_LIST,
    createPost: POST_CREATE,
    updatePost: POST_UPDATE,
    petRegister: PET_REGISTER,
};

export default routes;