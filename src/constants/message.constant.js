import { MIN_PASSWORD_LENGTH } from './auth.constant.js';
import { 
    MIN_REVIEW_LENGTH,
    MAX_REVIEW_LENGTH,
    MIN_SCORE,
    MAX_SCORE
} from './review.constant.js';

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
            NOT_MATCHED_WITH_PASSWORD: '�Է� �� �� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.',
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
    REVIEWS: {
        COMMON: {
        SCORE: {
            REQUIRED: '������ �Ű��ּ���.',
            SCORE_SCOPE: `������ ${MIN_SCORE}�̻� ${MAX_SCORE}���� �����մϴ�.`
        },
        CONTENT: {
            REQUIRED: '�ڱ�Ұ��� �Է��� �ּ���.',
            LENGTH: `�ڱ�Ұ��� ${MIN_REVIEW_LENGTH}�� �̻� ${MAX_REVIEW_LENGTH}���Ϸ� �ۼ��ؾ� �մϴ�.`,
        },
        NOT_FOUND: '���� ������ �������� �ʽ��ϴ�.',
        },
        CREATE: {
        SUCCEED: '���䰡 �ۼ��ƽ��ϴ�.',
        },
        READ_LIST: {
        SUCCEED: '���� ������ �����Խ��ϴ�.',
        },
        READ_DETAIL: {
        SUCCEED: '���� �� ��ȸ�� �����߽��ϴ�.',
        },
        UPDATE: {
        SUCCEED: '���䰡 �����Ǿ����ϴ�.',
        NO_BODY_DATA: '���� �� ������ �Է��� �ּ���.',
        },
        DELETE: {
        SUCCEED: '���䰡 �����Ǿ����ϴ�.',
        },
    },
};