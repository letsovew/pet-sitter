import { MIN_PASSWORD_LENGTH } from './auth.constant.js';

export const MESSAGES = {
    AUTH: {
        COMMON: {
        EMAIL: {
            REQUIRED: 'Please enter your email.',
            INVALID_FORMAT: 'The email format is incorrect.',
            DUPLICATED: 'This is an already subscribed email.',
        },
        PASSWORD: {
            REQUIRED: 'Please enter your password.',
            MIN_LENGTH: `Password must be at least ${MIN_PASSWORD_LENGTH} digits long.`,
        },
        // PASSWORD_CONFIRM: {
        //     REQUIRED: '비밀번호 확인을 입력해 주세요.',
        //     NOT_MATCHED_WITH_PASSWORD: '비밀번호가 일치하지 않습니다.',
        // },
        NICKNAME: {
            REQUIRED: 'Enter the nickname you want to use.',
        },
        UNAUTHORIZED: 'The credentials are invalid.',
        SESSION: {
            REGISTER_SESSION: 'Registered your credentials.',
            NO_SESSION: 'Sign in is required.',
            NOT_SUPPORTED_TYPE: 'This authentication method is not supported.',
            EXPIRED: 'Credentials have expired.',
            NO_USER: 'No users match the credentials.',
            INVALID: 'The credentials are invalid.',
        },
        },
        JOIN: {
        SUCCEED: 'Successfully signed up.',
        },
        LOGIN: {
        SUCCEED: 'Successfully logged in.',
        },
        REGISTER: {
            SUCCEED: 'Partner registration is complete.',
        },
    },
    USER: {
        BAD_REQUEST: 'Incorrect approach.',
        READ_ME: {
        SUCCEED: 'Lookup of my information was successful.',
        },
        USER_LIST: {
        SUCCEED: 'Imported a list of members.',
        },
        USER_DETAIL: {
        SUCCEED: 'The member detail lookup was successful.',
        },
        UPDATE: {
        SUCCEED: 'Membership information has been modified.',
        NO_BODY_DATA: 'Please enter the information you want to edit.',
        },
        DELETE: {
        SUCCEED: 'Unsubscribed.',
        },
    },
    POSTS: {
        COMMON: {
        TITLE: {
            REQUIRED: 'Please write a title.',
        },
        CONTENT: {
            REQUIRED: 'Please enter something.',
        },
        NOT_FOUND: 'The post you created doesnt exist.',
        },
        CREATED: {
            SUCCEED: 'Post has been created.',
        },
        READ_LIST: {
            SUCCEED: 'The posts have been imported.',
        },
        READ_DETAIL: {
            SUCCEED: 'The post detail lookup was successful.',
        },
        UPDATE: {
            SUCCEED: 'The post has been updated.',
            NO_BODY_DATA: 'Please enter the information you want to edit.',
        },
        DELETE: {
            SUCCEED: 'Post has been deleted..',
        },
    },
    SCHEDULES: {
        CREATED: {
            SUCCEED: 'The contract is complete.',
        },
        REQUIRED: 'Please fill in everything.',
    },
    PROPOSALS: {
        REQUEST: {
            SUCCEED: 'Proposal has been delivered.',
        },
    },
    PETS: {
        REGISTER: {
            SUCCEED: 'Pet has been enrolled.',
        }
    },
    SERVER: {
        ERROR: `The operation couldn't complete due to an unexpected error on the server, please try again later.`,
    },
    REQUIRED: 'Please enter all fields.',
};