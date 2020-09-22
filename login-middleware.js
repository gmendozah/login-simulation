var user1 = 'john.doe@gmail.com';
var user2 = 'mary.sue@gmail.com';
var user3 = 'sam@gmail.com';
module.exports = (req, res, next) => {
    if (req.method == 'POST' && req.path == '/login') {
        if (req.body.username === user1 ||
            req.body.username === user2 ||
            req.body.username === user3) {
            if (req.body.password === '12345') {
                switch (req.body.username) {
                    case user1:
                        if(req.body.attempts >=3){
                            res.status(200).json({
                                data: {
                                    'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNDYXJkIjp0cnVlLCJpc0Jsb2NrZWQiOnRydWUsImlkIjoxfQ.K_gZaCBFncBxosU7k6oVM_Hv3lJeOeMxvv2dqEGPFl4',
                                    'refreshToken': 'hello-world'
                                }
                            })
                        } else {
                            res.status(200).json({
                                data: {
                                    'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNDYXJkIjp0cnVlLCJpc0Jsb2NrZWQiOmZhbHNlLCJpZCI6MX0.iDi1iGXpOd0aLTKWR_rRRCE0IdW0zJWNIhEwAMOmyD0',
                                    'refreshToken': 'hello-world'
                                }
                            })
                        }
                        break;
                    case user2:
                        res.status(200).json({
                            data: {
                                'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNDYXJkIjpmYWxzZSwiaXNCbG9ja2VkIjpmYWxzZSwiaWQiOjJ9.rJc7QrK0Z3Kutrg33wYioXdv4PdtysqIC0OEs0Y4wFE',
                                'refreshToken': 'hello-world'
                            }
                        })
                        break;
                    case user3:
                        res.status(200).json({
                            data: {
                                'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNDYXJkIjp0cnVlLCJpc0Jsb2NrZWQiOnRydWUsImlkIjozfQ.h1zfh1EB87-v7UUBFB-C0ZdB9nlFC4eVrKUSkNfplfU',
                                'refreshToken': 'hello-world'
                            }
                        })
                        break;
                }
            } else {
                res.status(400).json({
                    message: 'Wrong password',
                    error: 1200
                })
            }
        } else {
            res.status(400).json({
                message: 'User not found',
                error: 1100
            })
        }
    } else {
        next()
    }
}