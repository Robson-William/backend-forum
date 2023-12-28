CREATE TABLE IF NOT EXISTS "boards" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100),
	"content" text,
	"timestamp" timestamp with time zone,
	"author_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"date" timestamp with time zone,
	"author_id" integer NOT NULL,
	"board" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(58),
	"username" varchar(20),
	"email" varchar(100),
	"picture" text,
	"created_at" timestamp with time zone,
	"pontuation" integer DEFAULT 0
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "boards" ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "users" ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "username_idx" ON "users" ("username");