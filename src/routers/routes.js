//AUTH
const AUTH = "/auth";
const JOIN = "/join";
const LOGIN = "/login";
const AUTH_REGISTER = "/register";

//USERS
const USERS = "/users";
const USER_UPDATE = "/update/:id";
const PROPOSALS_CREATE = "/proposals/create";
const USER_CONTRACTS = "/contracts";

//PARTNERS
const PARTNERS = "/partners"
const PARTNER_PROPOSALS = "/proposals"
const PARTNER_CONTRACTS = "/contracts"
const CONTRACTS_CREATE = "/contracts/create"


//POSTS
const POSTS = "/posts";
const POST_LIST = "/list"
const POST_CREATE = "/create"

//PETS
const PETS = "/pets";
const PET_REGISTER = "/register"

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
    userContracts: USER_CONTRACTS,
    partnerProposals: PARTNER_PROPOSALS,
    partnerContracts: PARTNER_CONTRACTS,
    contractsCreate: CONTRACTS_CREATE,
    postList: POST_LIST,
    postCreate: POST_CREATE,
    petRegister: PET_REGISTER,
};

export default routes;