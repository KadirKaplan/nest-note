import { Controller, Body, Delete, Get, HttpStatus, Param, Post, Put, Res, Render, Redirect } from '@nestjs/common';
import { response } from 'express';
import { CreateCategoryDto } from 'src/dto/student/category/create-category.dto';
import { UpdateCategoryDto } from 'src/dto/student/category/update-category.dto';
import { CategoryService } from 'src/service/student/category/category.service';
import { NoteService } from 'src/service/student/note/note.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService, private readonly noteService : NoteService) { }

    @Post()
    async createCategory(@Res() response, @Body() createCategoryDto: CreateCategoryDto) {
        try {
            const newCategory = await this.categoryService.createCategory(createCategoryDto);
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
  
    async getAllCategories(@Res() response) {
        try {
            const categories  = await this.categoryService.getAllCategories();
            const notes = await this.noteService.getAllNotes();
            // return response.status(HttpStatus.OK).json({
            //     message : 'Bütün veriler getirildi !',
            //     categories
            // });
            return response.status(HttpStatus.OK).render('category', {
                categories,notes

            });
        } catch(error) {
            return response.render('category');
        }
    }

    @Get('/:id')
    async getCategory(@Res() response, @Param('id') categoryid: string) {
        try {
            const category  = await this.categoryService.getOneCategory(categoryid);
            return response.status(HttpStatus.OK).json({
                message: 'Student found successfully', 
                category
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Put('/:id')
    async updateCategory(@Res() response, @Param('id') categoryid : string, @Body() updateCategoryDto: UpdateCategoryDto) {
        try {
            const updatedCategory = await this.categoryService.updateCategory(categoryid,updateCategoryDto);
            return response.status(HttpStatus.OK).json({
                message: 'Kategori has been successfully updated',
                updatedCategory,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteCategory(@Res() response, @Param('id') categoryid : string) {
        try {
            const deletedCategory = await this.categoryService.deleteCategory(categoryid);
            return response.status(HttpStatus.OK).json({
                message: 'Category deleted successfully',
                deletedCategory,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
       }
    }

}
