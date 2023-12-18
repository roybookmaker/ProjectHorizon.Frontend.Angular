export const environment = {
    login: 'login',
    recovery: 'recovery',

    baseGatewayWebApiUrl: (serviceName: string) => {
        return `https://localhost:7167/${serviceName.replace(/-/g, '')}`;
    },
}