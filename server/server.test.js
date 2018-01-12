const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('#GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('#GET /users',()=>{
        it('should return status 200 and that my name is on the list', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Iury',
                        age: 23
                    })
                })
                .end(done);
        });
    });
});