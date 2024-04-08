const URL = `https://dadosabertos.camara.leg.br/api/v2`;

exports.getAll = async (req, res) => {
    try {
        const resultado = await fetch(URL + '/deputados')
        const dataJson = await resultado.json()
        res.status(200).json(dataJson)
    } catch (e) {
        res.status(500).json({ msg: 'Houve um erro ao acessar a lista de deputados.' })
    }
};

exports.getOne = async (req, res) => {
    try {
        const resultado = await fetch(URL + '/deputados/' + req.params.id)
        const dataJson = await resultado.json()
        res.status(200).json(dataJson)
    } catch (e) {
        res.status(500).json({ msg: 'Houve um erro ao acessar a lista de deputados.' })
    }
};

