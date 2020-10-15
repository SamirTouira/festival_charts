export const movies = [
    {id: '1', title: 'title1', language: 'french', producer: 'firstname lastname' },
    {id: '2', title: 'title2', language: 'english', producer: 'firstname lastname' },
    {id: '3', title: 'title3', language: 'german', producer: 'firstname lastname' },
    {id: '4', title: 'title4', language: 'spanish', producer: 'firstname lastname' },
    {id: '5', title: 'title5', language: 'japanese', producer: 'firstname lastname' },
  ]
  ​
  const screenings = [
    {id: '11', title: 'screening1', movie: '1', startDate: '25/08/2020 11:00:00 PM', endDate: '26/08/2020 11:00:00 PM', attendees: []},
    {id: '12', title: 'screening2', movie: '2', startDate: '26/08/2020 11:00:00 PM', endDate: '27/08/2020 11:00:00 PM', attendees: []},
    {id: '13', title: 'screening3', movie: '1', startDate: '30/08/2020 11:00:00 PM', endDate: '31/08/2020 11:00:00 PM', attendees: []},
    {id: '14', title: 'screening4', movie: '4', startDate: '18/08/2020 11:00:00 PM', endDate: '19/08/2020 11:00:00 PM', attendees: []},
    {id: '15', title: 'screening5', movie: '5', startDate: '17/08/2020 11:00:00 PM', endDate: '18/08/2020 11:00:00 PM', attendees: []},
    {id: '16', title: 'screening6', movie: '3', startDate: '16/08/2020 11:00:00 PM', endDate: '17/08/2020 11:00:00 PM', attendees: []},
    {id: '17', title: 'screening7', movie: '5', startDate: '25/08/2020 11:00:00 PM', endDate: '26/08/2020 11:00:00 PM', attendees: []},
    {id: '18', title: 'screening8', movie: '4', startDate: '16/08/2020 11:00:00 PM', endDate: '17/08/2020 11:00:00 PM', attendees: []},
    {id: '19', title: 'screening9', movie: '2', startDate: '17/08/2020 11:00:00 PM', endDate: '18/08/2020 11:00:00 PM', attendees: []},
    {id: '20', title: 'screening10', movie: '3', startDate: '27/08/2020 11:00:00 PM', endDate: '28/08/2020 11:00:00 PM', attendees: []},
  ]
  ​
  const users = [
    {uid: '21', firstConnexion: '07/07/2020 11:00:00 PM', lastConnexion: '07/07/2020 11:00:00 PM', firstName: 'user1FN', lastname: 'user1LN'},
    {uid: '22', firstConnexion: '09/07/2020 11:00:00 PM', lastConnexion: '24/08/2020 11:00:00 PM', firstName: 'user2FN', lastname: 'user2LN'},
    {uid: '23', firstConnexion: '31/07/2020 11:00:00 PM', lastConnexion: '29/08/2020 11:00:00 PM', firstName: 'user3FN', lastname: 'user3LN'},
    {uid: '24', firstConnexion: '05/07/2020 11:00:00 PM', lastConnexion: '28/08/2020 11:00:00 PM', firstName: 'user4FN', lastname: 'user4LN'},
    {uid: '25', firstConnexion: '24/07/2020 11:00:00 PM', lastConnexion: '07/07/2020 11:00:00 PM', firstName: 'user5FN', lastname: 'user5LN'},
    {uid: '26', firstConnexion: '12/07/2020 11:00:00 PM', lastConnexion: '15/08/2020 11:00:00 PM', firstName: 'user6FN', lastname: 'user6LN'},
    {uid: '27', firstConnexion: '15/07/2020 11:00:00 PM', lastConnexion: '30/08/2020 11:00:00 PM', firstName: 'user7FN', lastname: 'user7LN'},
    {uid: '28', firstConnexion: '07/07/2020 11:00:00 PM', lastConnexion: '31/08/2020 11:00:00 PM', firstName: 'user8FN', lastname: 'user8LN'},
    {uid: '29', firstConnexion: '08/07/2020 11:00:00 PM', lastConnexion: '15/08/2020 11:00:00 PM', firstName: 'user9FN', lastname: 'user9LN'},
    {uid: '30', firstConnexion: '09/07/2020 11:00:00 PM', lastConnexion: '31/08/2020 11:00:00 PM', firstName: 'user10FN', lastname: 'user10LN'},
    {uid: '31', firstConnexion: '15/07/2020 11:00:00 PM', lastConnexion: '07/07/2020 11:00:00 PM', firstName: 'user11FN', lastname: 'user11LN'},
    {uid: '32', firstConnexion: '16/07/2020 11:00:00 PM', lastConnexion: '31/08/2020 11:00:00 PM', firstName: 'user12FN', lastname: 'user12LN'},
    {uid: '33', firstConnexion: '28/07/2020 11:00:00 PM', lastConnexion: '26/07/2020 11:00:00 PM', firstName: 'user13FN', lastname: 'user13LN'},
    {uid: '34', firstConnexion: '01/07/2020 11:00:00 PM', lastConnexion: '16/08/2020 11:00:00 PM', firstName: 'user14FN', lastname: 'user14LN'},
    {uid: '35', firstConnexion: '30/07/2020 11:00:00 PM', lastConnexion: '14/07/2020 11:00:00 PM', firstName: 'user15FN', lastname: 'user15LN'},
    {uid: '36', firstConnexion: '30/07/2020 11:00:00 PM', lastConnexion: '19/08/2020 11:00:00 PM', firstName: 'user16FN', lastname: 'user16LN'},
    {uid: '37', firstConnexion: '26/07/2020 11:00:00 PM', lastConnexion: '12/08/2020 11:00:00 PM', firstName: 'user17FN', lastname: 'user17LN'},
    {uid: '38', firstConnexion: '22/07/2020 11:00:00 PM', lastConnexion: '08/08/2020 11:00:00 PM', firstName: 'user18FN', lastname: 'user18LN'},
    {uid: '39', firstConnexion: '23/07/2020 11:00:00 PM', lastConnexion: '15/08/2020 11:00:00 PM', firstName: 'user19FN', lastname: 'user19LN'},
    {uid: '40', firstConnexion: '18/07/2020 11:00:00 PM', lastConnexion: '09/08/2020 11:00:00 PM', firstName: 'user20FN', lastname: 'user20LN'},
  ]