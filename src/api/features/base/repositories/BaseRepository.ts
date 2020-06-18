// import all interfaces
import {IWrite} from './interfaces/IWrite';
import {IRead} from './interfaces/IRead';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _model;

    constructor(_model) {
        this._model = _model;
    }

    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    find(item: T): Promise<T[]> {
        return this._model.find();
    }

    findOne(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}