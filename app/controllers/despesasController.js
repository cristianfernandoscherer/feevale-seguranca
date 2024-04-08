const URL = `https://dadosabertos.camara.leg.br/api/v2`;

exports.getByDeputadoId = async (req, res) => {
    try {
        const resultado = await fetch(URL + '/deputados/' + req.params.deputado_id + '/despesas')
        const dataJson = await resultado.json()
        res.status(200).json(dataJson)
    } catch (e) {
        res.status(500).json({ msg: 'Houve um erro ao acessar a lista de deputados.' })
    }
};

