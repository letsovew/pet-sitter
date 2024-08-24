import { MIN_PASSWORD_LENGTH } from './auth.constant.js';

export const MESSAGES = {
    AUTH: {
        COMMON: {
        EMAIL: {
            REQUIRED: '이메일을 입력해 주세요.',
            INVALID_FORMAT: '이메일 형식이 올바르지 않습니다.',
            DUPLICATED: '이미 가입 된 이메일 입니다.',
        },
        PASSWORD: {
            REQUIRED: '비밀번호를 입력해 주세요.',
            MIN_LENGTH: `비밀번호는 ${MIN_PASSWORD_LENGTH}자리 이상이어야 합니다.`,
        },
        PASSWORD_CONFIRM: {
            REQUIRED: '비밀번호 확인을 입력해 주세요.',
            NOT_MATCHED_WITH_PASSWORD: '비밀번호가 일치하지 않습니다.',
        },
        NAME: {
            REQUIRED: '사용할 이름을 입력해 주세요.',
        },
        UNAUTHORIZED: '인증 정보가 유효하지 않습니다.',
        SESSION: {
            REGISTER_SESSION: '인증 정보를 등록하였습니다.',
            NO_SESSION: '로그인이 필요합니다.',
            NOT_SUPPORTED_TYPE: '지원하지 않는 인증 방식입니다.',
            EXPIRED: '인증 정보가 만료되었습니다.',
            NO_USER: '인증 정보와 일치하는 사용자가 없습니다.',
            INVALID: '인증 정보가 유효하지 않습니다.',
        },
        },
        JOIN: {
        SUCCEED: '회원가입에 성공했습니다.',
        },
        LOGIN: {
        SUCCEED: '로그인에 성공했습니다.',
        },
        REGISTER: {
            SUCCEED: '파트너 등록이 완료되었습니다.'.
        },
    },
    USER: {
        BAD_REQUEST: '잘못된 접근입니다.';
        READ_ME: {
        SUCCEED: '내 정보 조회에 성공했습니다.',
        },
        CREATE: {
        SUCCEED: '회원가입이 완료되었습니다.',
        },
        USER_LIST: {
        SUCCEED: '회원 목록을 가져왔습니다.',
        },
        USER_DETAIL: {
        SUCCEED: '회원 상세 조회가 성공했습니다.',
        },
        UPDATE: {
        SUCCEED: '회원 정보가 수정되었습니다.',
        NO_BODY_DATA: '수정 할 정보를 입력해 주세요.',
        },
        DELETE: {
        SUCCEED: '회원 탈퇴 되었습니다.',
        },
    },
    POSTS: {
        COMMON: {
        TITLE: {
            REQUIRED: '제목을 작성해주세요.',
        },
        CONTENT: {
            REQUIRED: '내용을 입력해주세요.',
        },
        NOT_FOUND: '작성한 게시물이 존재하지 않습니다.',
        },
        CREATED: {
            SUCCEED: '게시물이 작성됐습니다.',
        },
        READ_LIST: {
            SUCCEED: '게시물들을 가져왔습니다.',
        },
        READ_DETAIL: {
            SUCCEED: '게시물 상세 조회에 성공했습니다.',
        },
        UPDATE: {
            SUCCEED: '게시물이 수정되었습니다.',
            NO_BODY_DATA: '수정 할 정보를 입력해 주세요.',
        },
        DELETE: {
            SUCCEED: '게시물이 삭제되었습니다.',
        },
    },
    SCHEDULES: {
        CREATED: {
            SUCCEED: '계약서가 작성되었습니다.',
        },
    },
    PROPOSALS: {
        REQUEST: {
            SUCCEED: '제안서가 전달되었습니다.',
        },
    },
    PETS: {
        REGISTER: {
            SUCCEED: '반려동물이 등록되었습니다.',
        }
    },
};