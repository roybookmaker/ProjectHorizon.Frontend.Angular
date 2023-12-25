export const environment = {
    login: 'login',
    register: 'register',
    recovery: 'recovery',
    reset: 'reset',

    baseGatewayWebApiUrl: (serviceName: string) => {
        return `https://localhost:7167/${serviceName.replace(/-/g, '')}`;
    },
}