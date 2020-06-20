export default abstract class BaseController {

    public repository;

    protected constructor(repository) {
        this.repository = repository;
    }

    public find = async (req, res) => {
        let dataRes;
        try {
            let data = await this.repository.find(req);
            let message = data.length === 0 ? 'Not found' : 'Success';
            dataRes = this.response(data, message)
        } catch (e) {
            dataRes = this.responseError(e, 'Error')
        }

        res.json(dataRes);
    }

    public findOne = async (req, res) => {
        let id = req.params.id;
        let dataRes;
        try {
            let data = await this.repository.findOne(id);
            let message = data === null ? 'Not found' : 'Success';
            dataRes = this.response(data, message)
        } catch (e) {
            dataRes = this.responseError(e, 'Error')
        }
        res.json(dataRes);
    }

    public create = async (req, res) => {
        let data = req.body;
        let dataRes;
        try {
            let id = await this.repository.create(data);
            dataRes = this.response({
                id: id
            }, 'Success')
        } catch (e) {
            dataRes = this.responseError(e, 'Error')
        }
        res.json(dataRes);
    }

    public update = async (req, res) => {
        let id = req.params.id;
        let data = req.body;
        let dataRes;
        try {
            let updateData = await this.repository.update(id, data);
            let message = updateData === true ? 'Success' : 'Not found';
            dataRes = this.response({}, message)
        } catch (e) {
            dataRes = this.responseError(e, 'Error')
        }
        res.json(dataRes);
    }

    public delete = async (req, res) => {
        let id = req.params.id;
        let dataRes;
        try {
            let deleteData = await this.repository.delete(id);
            let message = deleteData === true ? 'Success' : 'Not found';
            dataRes = this.response({}, message)
        } catch (e) {
            dataRes = this.responseError(e, 'Error')
            res.json(dataRes);
        }
        res.json(dataRes);
    }

    public response(data: {}, message: string) {
        return {
            'data': data,
            'message': message,
        }
    }

    public responseError(errors: {}, message: string) {
        return {
            'errors': errors,
            'message': message,
        }
    }
}
