export default abstract class BaseController {

    public repository;

    protected constructor(repository) {
        this.repository = repository;
    }

    public get = async (req, res) => {
        let data = await this.repository.find(req);
        let dataRes = this.response(data, 'Success')
        res.json(dataRes);
    }

    public detail(req, res) {

    }

    public store(req, res) {


    }

    public update(req, res) {


    }

    public delete(req, res) {


    }

    public response(data: {}, message: string) {
        return {
            'data': data,
            'message': message,
        }
    }
}
