var card1 = '2222222222222222222';
var card2 = '3333333333333333333';
var card3 = '6666222211115555000';
var pin = 9999;
module.exports = (req, res, next) => {
    if (req.method == 'POST' && req.path == '/card') {
        if ((req.body.cardNumber === card1 ||
            req.body.cardNumber === card2 ||
            req.body.cardNumber === card3) && req.body.pinNumber === pin) {
            if (req.body.attempts >= 4) {
                res.status(400).json({
                    message: 'User blocked',
                    error: 1000
                })
            }else {
                switch (req.body.username) {
                    case card1: // jhon doe
                        res.status(200).json({
                            data: {
                                'question1': 2,
                                'question2': 6,
                                'question3': 11,
                                'answer1': 'mascota',
                                'answer2': 'padre',
                                'answer3': 'superior',
                                'username':'john.doe@gmail.com',
                            }
                        })
                        break;
                    case card2: //
                        res.status(200).json({
                            data: {
                                'question1': 3,
                                'question2': 7,
                                'question3': 13,
                                'answer1': 'mayor',
                                'answer2': 'favorito',
                                'answer3': 'favorita',
                                'username':'mary.sue@gmail.com',
                            }
                        })// mary sue
                        break;
                    case card3: // sam
                        res.status(200).json({
                            data: {
                                'question1': 4,
                                'question2': 8,
                                'question3': 14,
                                'answer1': 'grado',
                                'answer2': 'favorita',
                                'answer3': 'casó',
                                'username':'sam@gmail.com',
                            }
                        })// mary
                        break;
                }
            }
        } else {
            res.status(400).json({
                message: 'Card not found',
                error: 1300
            })
        }
    } else {
        next()
    }
}