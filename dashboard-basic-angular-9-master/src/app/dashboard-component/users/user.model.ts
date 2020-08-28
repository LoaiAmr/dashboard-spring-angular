export class User {
    constructor(
        public userId: number,
        public username: string,
        public email: string,
        public image: string,
        public active: boolean,
        public roles: string
    ) { }
}