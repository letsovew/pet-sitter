export const HTTP_STATUS = {
    OK: 200, // ȣ�⿡ �������� ��
    CREATED: 201, // ������ �������� ��
    BAD_REQUEST: 400, // ����ڰ� �߸� ���� �� (��: �Է� ���� ���߷��� ��)
    UNAUTHORIZED: 401, // ���� ���� unauthenciated (��: ��й�ȣ�� Ʋ���� ��)
    FORBIDDEN: 403, // �ΰ� ���� unauthorized (��: ���� ������ ���� ��)
    NOT_FOUND: 404, // �����Ͱ� ���� ���
    CONFLICT: 409, // �浹�� �߻����� �� (��: �̸��� �ߺ�)
    INTERNAL_SERVER_ERROR: 500, // ����ġ ���� ������ �߻����� ��
};