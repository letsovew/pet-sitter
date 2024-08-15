import { prisma } from '@prisma/client';

export const prisma = new PrismaClient({
    // Prisma�� �̿��� �����ͺ��̽��� ������ ��, SQL�� ������ݴϴ�.
    log: ['query', 'info', 'warn', 'error'],

    // ���� �޽����� ���� �ƴ�, �����ڰ� �б� ���� ���·� ������ݴϴ�.
    errorFormat: 'pretty',
}); // PrismaClient �ν��Ͻ��� �����մϴ�.

try {
    await prisma.$connect();
    console.log('DB ���ῡ �����߽��ϴ�.');
}catch (error) {
    console.error('DB ���ῡ �����߽��ϴ�.', error);
}