import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from 'src/dto/student/category/create-category.dto';
import { UpdateCategoryDto } from 'src/dto/student/category/update-category.dto';
import { ICategory } from 'src/interface/category.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NoteService } from '../note/note.service';
import { INote } from 'src/interface/note.interface';

@Injectable()
export class CategoryService {

    constructor(@InjectModel('Category') private categoryModel: Model<ICategory>,@InjectModel('Note') private noteModel : Model<INote>) { }

    //create category
    async createCategory(createCategoryDto: CreateCategoryDto): Promise<ICategory> {
        const newCategory = await new this.categoryModel(createCategoryDto);
        return newCategory.save();

    }

    //get all category
    async getAllCategories(): Promise<ICategory[]>  {
        const categories = await this.categoryModel.find();
       
        if (!categories || categories.length == 0) {
            throw new NotFoundException('Kategori bulunamadı!');
        }
        return categories;
    }

    //get all notes
    async getAllNotes(): Promise<INote[]>  {
        const notes = await this.noteModel.find();
       
        if (!notes || notes.length == 0) {
            throw new NotFoundException('Not bulunamadı!');
        }
        return notes;
    }
    

    //get one category 
    async getOneCategory(categoryid: string): Promise<ICategory> {
        const category = await this.categoryModel.findById(categoryid).exec();
        if (!category) {
            throw new NotFoundException(`#${categoryid} li kategori bulunamadı!`);
        }
        return category;
    }

    // update category
    async updateCategory(categoryid: string, updateCategoryDto: UpdateCategoryDto): Promise<ICategory> {
        const updatedCategory = await this.categoryModel.findByIdAndUpdate(categoryid, updateCategoryDto, { new: true });
        if (!updatedCategory) {
            throw new NotFoundException(`#${categoryid} li kategori bulunamadı!`)
        }
        return updatedCategory;
    }


    //delete category
    async deleteCategory(categoryid: string): Promise<ICategory> {
        const deletedCategory = await this.categoryModel.findByIdAndRemove(categoryid);
        if (!deletedCategory) {
            throw new NotFoundException(`#${categoryid} li kategori bulunamadı!`);
        }
        return deletedCategory;
    }
}
