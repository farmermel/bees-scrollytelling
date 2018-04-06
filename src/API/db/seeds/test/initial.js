exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(() => knex('bees').del())
    .then(() => {
      return knex('users')
        .insert([
          { location: 'Maryland', age: 10 },
          { location: 'Colorado', age: 10 },
          { location: 'Jersey', age: 10 }
        ])
        .then(() => {
          return knex('bees').insert([
            { question: 'Do you LOVE bees', user_answer: 'YES', users_id: '1' },
            { question: 'what about BEES do you love most', user_answer: 'Honey', users_id: '1' }
          ]);
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error Seeding, ${error}`));
    })
    .catch(error => console.log(`Error Seeding, ${error}`));
};
