class Github{

    constructor(){

        this.client_id = '55ff00c6acbcacd3a8e2';
        this.client_secret = 'b8f0758e6d541c35444c94e0bf652259c6eb7518';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return{
            profile,
            repos
        }

    }

}