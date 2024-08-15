//AUTH
const JOIN = "/auth/join"
const LOGIN = "/auth/login"
const AUTH_REGISTER = "/auth/register"

//USER
const USER_UPDATE = "/users/update/:id"
const USER_PROPOSALS = "/users/proposals"
const USER_CONTRACTS = "/users/contracts"

//PARTNER
const PARTNER_PROPOSALS = "/partners/proposals"
const PARTNER_CONTRACTS = "/partners/contracts"


//POST
const POST_LIST = "/posts/list"
const POST_CREATE = "/posts/create"

//PET
const PET_REGISTER = "/pets/register"

//PROPOSAL

//CONTRACTS


const routes = {
    join: JOIN,
    login: LOGIN,
    authRegister: AUTH_REGISTER,
    userUpdate: id => {
        if(id)  return `/users/update/${id}`;
        else return USER_UPDATE;
    },
    userProposals: USER_PROPOSALS,
    userContracts: USER_CONTRACTS,
    partnerProposals: PARTNER_PROPOSALS,
    partnerContracts: PARTNER_CONTRACTS,
    postList: POST_LIST,
    postCreate: POST_CREATE,
    petRegister: PET_REGISTER,
};

export default routes;