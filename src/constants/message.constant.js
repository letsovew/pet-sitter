import { MIN_PASSWORD_LENGTH } from './auth.constant.js';

export const MESSAGES = {
    AUTH: {
        COMMON: {
        EMAIL: {
            REQUIRED: '�̸����� �Է��� �ּ���.',
            INVALID_FORMAT: '�̸��� ������ �ùٸ��� �ʽ��ϴ�.',
            DUPLICATED: '�̹� ���� �� �̸��� �Դϴ�.',
        },
        PASSWORD: {
            REQUIRED: '��й�ȣ�� �Է��� �ּ���.',
            MIN_LENGTH: `��й�ȣ�� ${MIN_PASSWORD_LENGTH}�ڸ� �̻��̾�� �մϴ�.`,
        },
        PASSWORD_CONFIRM: {
            REQUIRED: '��й�ȣ Ȯ���� �Է��� �ּ���.',
            NOT_MATCHED_WITH_PASSWORD: '��й�ȣ�� ��ġ���� �ʽ��ϴ�.',
        },
        NAME: {
            REQUIRED: '����� �̸��� �Է��� �ּ���.',
        },
        UNAUTHORIZED: '���� ������ ��ȿ���� �ʽ��ϴ�.',
        SESSION: {
            REGISTER_SESSION: '���� ������ ����Ͽ����ϴ�.',
            NO_SESSION: '�α����� �ʿ��մϴ�.',
            NOT_SUPPORTED_TYPE: '�������� �ʴ� ���� ����Դϴ�.',
            EXPIRED: '���� ������ ����Ǿ����ϴ�.',
            NO_USER: '���� ������ ��ġ�ϴ� ����ڰ� �����ϴ�.',
            INVALID: '���� ������ ��ȿ���� �ʽ��ϴ�.',
        },
        },
        JOIN: {
        SUCCEED: 'ȸ�����Կ� �����߽��ϴ�.',
        },
        LOGIN: {
        SUCCEED: '�α��ο� �����߽��ϴ�.',
        },
        REGISTER: {
            SUCCEED: '��Ʈ�� ����� �Ϸ�Ǿ����ϴ�.'.
        },
    },
    USER: {
        BAD_REQUEST: '�߸��� �����Դϴ�.';
        READ_ME: {
        SUCCEED: '�� ���� ��ȸ�� �����߽��ϴ�.',
        },
        CREATE: {
        SUCCEED: 'ȸ�������� �Ϸ�Ǿ����ϴ�.',
        },
        USER_LIST: {
        SUCCEED: 'ȸ�� ����� �����Խ��ϴ�.',
        },
        USER_DETAIL: {
        SUCCEED: 'ȸ�� �� ��ȸ�� �����߽��ϴ�.',
        },
        UPDATE: {
        SUCCEED: 'ȸ�� ������ �����Ǿ����ϴ�.',
        NO_BODY_DATA: '���� �� ������ �Է��� �ּ���.',
        },
        DELETE: {
        SUCCEED: 'ȸ�� Ż�� �Ǿ����ϴ�.',
        },
    },
    POSTS: {
        COMMON: {
        TITLE: {
            REQUIRED: '������ �ۼ����ּ���.',
        },
        CONTENT: {
            REQUIRED: '������ �Է����ּ���.',
        },
        NOT_FOUND: '�ۼ��� �Խù��� �������� �ʽ��ϴ�.',
        },
        CREATED: {
            SUCCEED: '�Խù��� �ۼ��ƽ��ϴ�.',
        },
        READ_LIST: {
            SUCCEED: '�Խù����� �����Խ��ϴ�.',
        },
        READ_DETAIL: {
            SUCCEED: '�Խù� �� ��ȸ�� �����߽��ϴ�.',
        },
        UPDATE: {
            SUCCEED: '�Խù��� �����Ǿ����ϴ�.',
            NO_BODY_DATA: '���� �� ������ �Է��� �ּ���.',
        },
        DELETE: {
            SUCCEED: '�Խù��� �����Ǿ����ϴ�.',
        },
    },
    SCHEDULES: {
        CREATED: {
            SUCCEED: '��༭�� �ۼ��Ǿ����ϴ�.',
        },
    },
    PROPOSALS: {
        REQUEST: {
            SUCCEED: '���ȼ��� ���޵Ǿ����ϴ�.',
        },
    },
    PETS: {
        REGISTER: {
            SUCCEED: '�ݷ������� ��ϵǾ����ϴ�.',
        }
    },
};