import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {INote} from 'src/interface/note.interface';
import { CreateNoteDto } from 'src/dto/student/note/create-note.dto';
import { UpdateNoteDto } from 'src/dto/student/note/update-note.dto';
import { Note } from 'src/schema/note.schema';
import { Model } from 'mongoose';
import { CreateCategoryDto } from 'src/dto/student/category/create-category.dto';
@Injectable()
export class NoteService {
    constructor(@InjectModel('Note') private noteModel : Model<INote>) {}

    //create note
    async createNote(createNoteDto: CreateNoteDto) :Promise<INote> {
        const newNote = await new this.noteModel(createNoteDto);
        return newNote.save();
    }

    //getall notes
    async getAllNotes(): Promise<INote[]> {
        const notes = await this.noteModel.find();
        return notes;
    }

    //get one note 
    async getoneNote(noteid:string): Promise<INote> {
        const note = await this.noteModel.findById(noteid);
        return note;
    }
    //update note
    async updateNote (noteid: string, updateNoteDto: UpdateNoteDto): Promise<INote> {
        const updatedNote = await this.noteModel.findByIdAndUpdate(noteid,updateNoteDto,{ new: true })
        return updatedNote;
    }

    //delete note 
    async deleteNote (noteid : string) : Promise<INote> {
        const deletedNote = await this.noteModel.findByIdAndDelete(noteid);
        return deletedNote;
    }


}
