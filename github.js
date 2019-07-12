class Github {
  constructor() {
    this.client_id = '2167d5aff4f2c2901096';
    this.client_secret = 'ecd599281ab5aa1f91e8b453f6ebe1f29e25ee9d';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      // is equal to profile: profile
      profile
    }
  }

}