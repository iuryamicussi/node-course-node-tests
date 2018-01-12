const utils = require('./utils');
const expect = require('expect');

describe('Utils',()=>{
	describe('#sync',()=>{
		it('should add two numbers',()=>{
			var res = utils.add(33,11);
        
			expect(res).toBe(44).toBeA('number');
			// if(res !==44){
			//     throw new Error(`Expected 44, but got ${res}.`);
			// }
            
		});

		it('should square a number',() => {
			var res = utils.square(3);
        
			expect(res).toBe(9).toBeA('number');
			// if(res !== 9){
			//     throw new Error(`Expected 9, got ${res}.`)
			// }
		});

		it('should return an object with two properties: firstName, lastName and the correct names',()=>{
			var res = utils.setName({},'Iury Nunes Amicussi');
			expect(res).toInclude({
				firstName : 'Iury',
				lastName : 'Amicussi'
			}).toBeAn('object');
		});
	});
    
	describe('#async',()=>{
		it('should async add two numbers', (done)=>{
			utils.asyncAdd(4,3,(sum)=>{
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
        
        
        
		it('should async square a number',(done)=>{
			utils.asyncSquare(3,(res)=>{
				expect(res).toBe(9).toBeA('number');
				done();
			});
		});
	});
});

// it('should expect some values',()=>{
//     //expect(12).toNotBe(12);
//     //expect({name:'andrew'}).toNotEqual({name:'Andrew'});
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(5);
//     // expect({
//     //     name: 'Andrew',
//     //     age : 25,
//     //     localtion: 'Philadelphia'
//     // }).toInclude({age : 25});
// });

