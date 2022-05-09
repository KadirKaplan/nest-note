import { Controller, Body, Delete, Get, HttpStatus, Param, Post, Put, Res, Render, Redirect } from '@nestjs/common';
import { response } from 'express';
import { CreateNoteDto } from 'src/dto/student/note/create-note.dto';
import { UpdateNoteDto } from 'src/dto/student/note/update-note.dto';
import { NoteService } from 'src/service/student/note/note.service';


@Controller('note')
export class NoteController {
    constructor(private readonly noteService : NoteService) {}

    @Post()
    async createNote (@Res() response, @Body() createNoteDto: CreateNoteDto) {
        try {
            const newNote = await this.noteService.createNote(createNoteDto);

            return response.status(HttpStatus.CREATED).redirect('/category');
        } catch(error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode : 400,
                message :'Error : Categori Oluşturulamadı!',
                error:'Bad Request!'
            });
        }
    }

    @Get()
    async getAllNotes (@Res() response) {
        const notes = await this.noteService.getAllNotes();
        return response.status(HttpStatus.OK).render('category', {
            notes

        });
    }
}
