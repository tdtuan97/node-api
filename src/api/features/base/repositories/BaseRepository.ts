// import all interfaces
import {IWrite} from './interfaces/IWrite';
import {IRead} from './interfaces/IRead';

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _model;

    protected constructor(_model) {
        this._model = _model;
    }

    find(item: T): Promise<T[]> {
        return this._model.find();
    }

    findOne(id: string): Promise<T> {
        return this._model.findOne(id);
    }

    create(item: T): Promise<boolean> {
        return this._model.create();
    }

    update(id: string, item: T): Promise<boolean> {
        return this._model.update(id, item);
    }

    delete(id: string): Promise<boolean> {
        return this._model.delete(id);
    }
}